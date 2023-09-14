# We will check the distribution of stemmed word lengths across the whole review dataset to understand what is the length of the maximum number of words we will consider for the word to be relevant.
# In other words we will keep only those words which has a length less than that of a speicific length (we will obtain this specific length from the histogram).
from nltk.stem.snowball import SnowballStemmer
from tqdm import tqdm
from nltk.corpus import stopwords
from flask import jsonify
import nltk


import re

# Expand the reviews x is aninput string of any length. Convert all the words to lower case


def decontracted(sentence):
    tmp = str(sentence).lower()
    tmp = tmp.replace(",000,000", " m").replace(",000", " k").replace("′", "'").replace("’", "'")\
        .replace("won't", " will not").replace("cannot", " can not").replace("can't", " can not")\
        .replace("n't", " not").replace("what's", " what is").replace("it's", " it is")\
        .replace("'ve", " have").replace("'m", " am").replace("'re", " are")\
        .replace("he's", " he is").replace("she's", " she is").replace("'s", " own")\
        .replace("%", " percent ").replace("₹", " rupee ").replace("$", " dollar ")\
        .replace("€", " euro ").replace("'ll", " will").replace("how's", " how has").replace("y'all", " you all")\
        .replace("£", " pound sterling ").replace("'ll", " will").replace("how's", " how has").replace("y'all", " you all")\
        .replace("o'clock", " of the clock").replace("ne'er", " never").replace("let's", " let us")\
        .replace("finna", " fixing to").replace("gonna", " going to").replace("gimme", " give me").replace("gotta", " got to").replace("'d", " would")\
        .replace("daresn't", " dare not").replace("dasn't", " dare not").replace("e'er", " ever").replace("everyone's", " everyone is")\
        .replace("'cause'", " because")

    tmp = re.sub(r"([0-9]+)000000", r"\1m", tmp)
    tmp = re.sub(r"([0-9]+)000", r"\1k", tmp)
    return tmp


'''Data Cleaning Stage.'''
# Data Cleaning Stage. Clean each review from the sampled Amazon Dataset

''' pattern = re.compile('<.*?>') #Function to clean html tags from a sentence
    cleaned_text = re.sub(pattern,' ',sentence)
    return cleaned_text'''

# Remove words with numbers python: https://stackoverflow.com/a/18082370/4084039


def removeNumbers(sentence):
    sentence = re.sub("\S*\d\S*", " ", sentence).strip()
    return (sentence)

# Function to clean html tags from a sentence


def removeHtml(sentence):
    pattern = re.compile('<.*?>')
    cleaned_text = re.sub(pattern, ' ', sentence)
    return cleaned_text

# Remove URL from sentences.


def removeURL(sentence):
    text = re.sub(r"http\S+", " ", sentence)
    sentence = re.sub(r"www.\S+", " ", text)
    return (sentence)

# Function to keep only words containing letters A-Z and a-z. This will remove all punctuations, special characters etc. https://stackoverflow.com/a/5843547/4084039


def removePunctuations(sentence):
    cleaned_text = re.sub('[^a-zA-Z]', ' ', sentence)
    return (cleaned_text)

# https://stackoverflow.com/questions/37012948/regex-to-match-an-entire-word-that-contains-repeated-character
# Remove words like 'zzzzzzzzzzzzzzzzzzzzzzz', 'testtting', 'grrrrrrreeeettttt' etc. Preserves words like 'looks', 'goods', 'soon' etc. We will remove all such words which has three consecutive repeating characters.


def removePatterns(sentence):
    cleaned_text = re.sub("\\s*\\b(?=\\w*(\\w)\\1{2,})\\w*\\b", ' ', sentence)
    return (cleaned_text)


def dataCleaning(sentences):
    # Stemming and stopwords removal
    sno = SnowballStemmer(language='english')

    # Removing the word 'not' from stopwords
    default_stopwords = set(stopwords.words('english'))
    remove_not = set(['no', 'nor', 'not', 'movie'])
    custom_stopwords = default_stopwords - remove_not

    total_sentences = []
    for review in tqdm(sentences):
        review = decontracted(review)
        review = removeNumbers(review)
        review = removeHtml(review)
        review = removeURL(review)
        review = removePunctuations(review)
        review = removePatterns(review)

        tmpWords = []
        for cleaned_words in review.split():
            if ((cleaned_words not in custom_stopwords)):
                stemed_word = (sno.stem(cleaned_words.lower()))
                tmpWords.append(stemed_word)
            # else:
            #     tmpWords.append(cleaned_words)

        tmpSentence = " ".join(tmpWords)
        total_sentences.append(tmpSentence)

        # total_sentences.append(review)

    # print(total_sentences)
    return jsonify({'data': total_sentences})

    # total_words = list(set(total_words))  # Get list of unique words.

    # A list to hold the length of each words used in all the reviews used across the whole dataset.
    # dist = []
    # for i in tqdm(total_words):
    #     length = len(i)
    #     dist.append(length)


# dataCleaning(["We're going to a movie, with Jason",
#              "We'll not go to the movie"])
