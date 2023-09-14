# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request
from keyword_extraction import *
from process_data import dataCleaning
from sentiment_analysis import sentimentAnalysis

# creating a Flask app
app = Flask(__name__)

# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.


@app.post('/process-data')
def dataCleaningCtrl():
    print(request.json['data'])
    return dataCleaning(request.json['data'])


@app.post('/keyword-extract')
def keywordExtractionCtrl():
    return keywordModelExecute(request.json['data'])

@app.post('/sentiment-analysis')
def sentimentAnalysisCtrl():
    return sentimentAnalysis(sentence=request.json['data'])

# driver function
if __name__ == '__main__':
    app.run(debug=True)
