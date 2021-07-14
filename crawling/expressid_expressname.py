# -*- coding: utf-8 -*-
"""expressid_expressname.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/165G3XVPTxjih5O7YRhZFfBo_x2NTTyKf
"""

pip install xmltodict

import requests, xmltodict
import pandas as pd

key = "YIG48RZ4OVNbB15tDMQv6%2FS4eDc38APYyyBkaUCB%2BnrBCbtm7l1hpnNDmVQ1p4RXGoQC7GYdXhpYgoPn%2FIzZww%3D%3D"
url = "http://openapi.tago.go.kr/openapi/service/ExpBusInfoService/getExpBusTrminlList?numOfRows=1000&pageNo=1&terminalNm=&ServiceKey=YIG48RZ4OVNbB15tDMQv6%2FS4eDc38APYyyBkaUCB%2BnrBCbtm7l1hpnNDmVQ1p4RXGoQC7GYdXhpYgoPn%2FIzZww%3D%3D"

content = requests.get(url).content
dict = xmltodict.parse(content)
# print(dict['response'])

termIDs, termNms = [], []
termIDtermNm = {}

for terminal in dict['response']['body']['items']['item']:
  termIDtermNm[terminal['terminalId']] = terminal['terminalNm']

df = pd.Series(termIDtermNm)
display(df)
df.to_csv('express_id_name.csv', index=True)