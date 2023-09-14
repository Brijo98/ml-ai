from textblob import TextBlob
from flask import jsonify


def sentimentAnalysis(sentence):
    blob = TextBlob(sentence)
    print(blob.sentiment)
    return jsonify({'data': {"polarity": blob.sentiment[0], "subjectivity": blob.sentiment[1]}})

