import pandas as pd 
from datetime import date

def format_list(list_string):
    if pd.isna(list_string):
        return ""

    list_string = list_string.replace("-", ",").replace("- ", ",").replace(", ", ",").split(",")
    list_string = ["  - " + element for element in list_string]
    list_string = "\n".join(list_string)

    return list_string

native_df = pd.read_csv("native.csv")
native_df["Tag"] = "Native"

edible_df = pd.read_csv("edible.csv")
edible_df["Tag"] = "Edible"

pond_df = pd.read_csv("pond.csv")
pond_df["Tag"] = "Pond"

all_df = pd.concat([native_df, edible_df], axis=0)
all_df = pd.concat([all_df, pond_df], axis=0)

tag_df = all_df.groupby(["Common name"])['Tag'].agg(list).reset_index()

all_df = all_df[[col for col in native_df.columns if col != 'Tag']].drop_duplicates()
all_df = pd.merge(all_df, tag_df, how='inner', on="Common name")
all_df = all_df.rename(columns={'4"': '4', 'Additional Info.': 'Additional Info'})

today = date.today()
formatted_date = today.strftime("%Y-%m-%d")

for index, plant in all_df.iterrows():
    tags = "\n".join(["  - " + element for element in plant["Tag"]])
    light_conditions = format_list(plant["Light"]).replace('Pt', 'Partial')
    water_conditions = format_list(plant["Water"])

    formatted_name = plant["Common name"].replace(" ", "-").replace("/", "-").lower()
    file_name = f"{formatted_date}-{formatted_name}.md"
    
    md = f"""---
latinName: {plant["Latin name"]}
tags:
{tags}
commonName: {plant["Common name"]}
size4inch: {"false" if pd.isna(plant["4"]) else "true"}
size1gallon: {"false" if pd.isna(plant["1 Gallon"]) else "true"}
size3gallon: {"false" if pd.isna(plant["3 Gallon"]) else "true"}
size5gallon: {"false" if pd.isna(plant["5 Gallon"]) else "true"}
lightConditions:
{light_conditions}
waterConditions:
{water_conditions}
height: {"" if pd.isna(plant["Height"]) else plant["Height"]}
bloom: {"" if pd.isna(plant["Bloom"]) else plant["Bloom"]}
benefits: {"" if pd.isna(plant["Benefits"]) else plant["Benefits"]}
link: {"" if pd.isna(plant["Additional Info"]) else plant["Additional Info"]}
visible: true
---"""

    with open(f"content/plants/{file_name}", "w") as file:
        file.write(md)
