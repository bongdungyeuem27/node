from pathlib import Path


import sys
import json
import time

base_path = Path(__file__).parent


# print(sys.stdin[:-1])
for line in sys.stdin:
    data = line[:-1]
    # print(data)
    # print(line[:-1])
# print(data)


def predict_level(input):
    import pandas as pd
    # Đọc dữ liệu vào dataframe
    df_example = pd.DataFrame(input)
    # Lọc lấy những Skill trên 50%
    df_example["Skill"] = df_example["Skill"].str.upper()
    df_example = df_example[df_example['Level'] >= 50]

    joblevelResult = {'frontend': 'Unknown',
                      'backend': 'Unknown', 'blockchain': 'Unknown'}
    jobpointResult = {'frontend': '0',
                      'backend': '0', 'blockchain': '0'}

    # Xử lý tính điểm Frontend Developer
    df_frontend_skills_point = pd.read_csv((base_path / './FrontEnd_Developer_SkillsPoint.csv').resolve()
                                           )
    df_frontend_skills_point["Skill"] = df_frontend_skills_point["Skill"].str.upper()
    df_frontend_levels_point = pd.read_csv((base_path / './FrontEnd_Developer_LevelsPoint.csv').resolve()
                                           )
    df_example_point = df_frontend_skills_point[(df_frontend_skills_point['Skill'].isin(
        df_example['Skill'])) | (df_frontend_skills_point['Detail'].isin(df_example['Skill']))]
    calc_point = df_example_point['Point'].sum()
    jobpointResult["frontend"] = str(calc_point)
    min_length = len(df_frontend_levels_point[(
        df_frontend_levels_point['MinPoint'] <= calc_point)])
    length = len(df_frontend_levels_point[(df_frontend_levels_point['MinPoint'] <= calc_point) & (
        df_frontend_levels_point['MaxPoint'] >= calc_point)])
    if (min_length > 0):
        if (length > 0):
            result = df_frontend_levels_point[(df_frontend_levels_point['MinPoint'] <= calc_point) & (
                df_frontend_levels_point['MaxPoint'] >= calc_point)]['Level'].tolist()[-1]
            joblevelResult["frontend"] = result
        else:
            result = df_frontend_levels_point[(
                df_frontend_levels_point['MaxPoint'] <= calc_point)]['Level'].tolist()[-1]
            joblevelResult["frontend"] = result

    # Xử lý tính điểm Blockchain Developer
    df_blockchain_skills_point = pd.read_csv((base_path / './Blockchain_Developer_SkillsPoint.csv').resolve()
                                             )
    df_blockchain_skills_point["Skill"] = df_blockchain_skills_point["Skill"].str.upper()
    df_blockchain_levels_point = pd.read_csv((base_path / './Blockchain_Developer_LevelsPoint.csv').resolve()
                                             )
    df_example_point = df_blockchain_skills_point[(df_blockchain_skills_point['Skill'].isin(
        df_example['Skill'])) | (df_blockchain_skills_point['Detail'].isin(df_example['Skill']))]
    calc_point = df_example_point['Point'].sum()
    jobpointResult["blockchain"] = str(calc_point)
    min_length = len(df_blockchain_levels_point[(
        df_blockchain_levels_point['MinPoint'] <= calc_point)])
    length = len(df_blockchain_levels_point[(df_blockchain_levels_point['MinPoint'] <= calc_point) & (
        df_blockchain_levels_point['MaxPoint'] >= calc_point)])
    if (min_length > 0):
        if (length > 0):
            result = df_blockchain_levels_point[(df_blockchain_levels_point['MinPoint'] <= calc_point) & (
                df_blockchain_levels_point['MaxPoint'] >= calc_point)]['Level'].tolist()[-1]
            joblevelResult["blockchain"] = result
        else:
            result = df_blockchain_levels_point[(
                df_blockchain_levels_point['MaxPoint'] <= calc_point)]['Level'].tolist()[-1]
            joblevelResult["blockchain"] = result

    # Xử lý tính điểm backend Developer
    df_backend_skills_point = pd.read_csv((base_path / './Backend_Developer_SkillsPoint.csv').resolve()
                                          )
    df_backend_skills_point["Skill"] = df_backend_skills_point["Skill"].str.upper()
    df_backend_levels_point = pd.read_csv((base_path / './Backend_Developer_LevelsPoint.csv').resolve()
                                          )
    df_example_point = df_backend_skills_point[(df_backend_skills_point['Skill'].isin(
        df_example['Skill'])) | (df_backend_skills_point['Detail'].isin(df_example['Skill']))]
    calc_point = df_example_point['Point'].sum()
    jobpointResult["backend"] = str(calc_point)
    min_length = len(df_backend_levels_point[(
        df_backend_levels_point['MinPoint'] <= calc_point)])
    length = len(df_backend_levels_point[(df_backend_levels_point['MinPoint'] <= calc_point) & (
        df_backend_levels_point['MaxPoint'] >= calc_point)])
    if (min_length > 0):
        if (length > 0):
            result = df_backend_levels_point[(df_backend_levels_point['MinPoint'] <= calc_point) & (
                df_backend_levels_point['MaxPoint'] >= calc_point)]['Level'].tolist()[-1]
            joblevelResult["backend"] = result
        else:
            result = df_blockchain_levels_point[(
                df_backend_levels_point['MaxPoint'] <= calc_point)]['Level'].tolist()[-1]
            joblevelResult["backend"] = result
    return {"level": joblevelResult, "point": jobpointResult}


# data = '{"Nikhil" : 1, "Akshat" : 2, "Akash" : 3}'
data = (json.loads((data)))

all = predict_level(data)
print(json.dumps(all))
