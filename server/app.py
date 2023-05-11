import numpy as np
from flask import Flask, request, jsonify, render_template
import joblib
import pandas as pd 
import pickle
from flask_cors import CORS
app = Flask(__name__)
CORS(app) 
model=joblib.load("pipeline.h5")
df=pd.read_csv("transaction_dataset.csv")
df=df.dropna()
X = df.drop('FLAG', axis=1)
y = df['FLAG']
model.fit(X, y)
listu=[]
df1=pd.read_csv("data1.csv")
bd=df1.loc[(df1["Address"]     =="0x001b28141562bc2601694d27c3f5fda2c06c234c")]
print(bd)
X1 = bd.drop('FLAG', axis=1)
X1 = X1.drop('Address', axis=1)
y1 = bd['FLAG']
m=""
print(X1);
preds = str(model.predict(X1))
@app.route('/api/send-data', methods=['POST'])
def receive_data():
    print("hello")
    data = request.get_json()
    m=data
    print(m)    
    add=m["message"]
    print(add)
    bd=df1.loc[(df1["Address"]     ==add)]
    print(bd)
    count_row = bd.shape[0]
    if count_row==0:
        preds='[2]'
    else:
        X1 = bd.drop('FLAG', axis=1)
        X1 = X1.drop('Address', axis=1)
        y1 = bd['FLAG']
        m=""
        print(X1);
        preds = str(model.predict(X1))
        print(preds)
    return {'message': preds[1]}
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
# preds = model.predict(X1)
def predict():
   
    # int_features = [int(x) for x in request.form.values()]
    # final_features = [int_features]
    # print(final_features)

    ####################################################
    # prediction = model.predict(final_features)

    # output = round(prediction[0], 2)
    
    # preds = model.predict(X1)

    return render_template('index.html', prediction_text='Result  {}'.format(preds))

@app.route('/predict_api',methods=['POST'])
def predict_api():
   
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])

    output = prediction[0]
    return jsonify(output)



if __name__ == "__main__":
    app.run(debug=True)