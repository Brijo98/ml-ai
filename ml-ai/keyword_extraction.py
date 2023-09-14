from keybert import KeyBERT
# import db
# Using flask to make an api
# import necessary libraries and functions
from flask import jsonify

# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.


def keywordModelExecute(data):
    # connection = db.connection
    # data = []

    # with connection:
    #     with connection.cursor() as cursor:
    #         # Read record
    #         sql = "select id, data, user_id from raw_data where is_extraction_performed=FALSE and id=%s"
    #         cursor.execute(sql, id)
    #         record = cursor.fetchone()
    #         # print(result)
    #         # for record in result:
    #         # val = {}
    #         # val["id"] = record[0]
    #         # val["data"] = record[1]
    #         # val["user_id"] = record[2]
    #         # print(val)
    #         # data.append(val)

    #         if record:
    kw_model = KeyBERT()
    keywords = kw_model.extract_keywords(data)
    # res = []
                # for keys in keywords:
                #     # val = {}
                #     # val["key"] = keys[0]
                #     # val["value"] = keys[1]
                #     # val["raw_data_id"] = record["id"]
                #     # val["user_id"] = record["user_id"]
                #     # Create a new record
                #     sql = "INSERT INTO `keyword_extraction_result` (`key`, `value`, `raw_data_id`, `user_id`) VALUES (%s, %s, %s, %s)"
                #     cursor.execute(
                #         sql, (keys[0], keys[1], record["id"], record["user_id"]))
                #     print("data added!")
                #     # cursor.execute("Insert into ")

                # update_sql = "Update raw_data SET is_extraction_performed=TRUE where id=%s"
                # cursor.execute(update_sql, (record["id"]))
                # print("updated raw_data! %s", record["id"])
            # else:
            #     return jsonify({'data': "Model already executed"})

        # connection.commit()
    # print("connection committed")
    data = []
    for keys in keywords:
        val = {}
        val["key"] = keys[0]
        val["value"] = keys[1]
        data.append(val)
        # val["raw_data_id"] = record["id"]
        # val["user_id"] = record["user_id"]
    return jsonify({'data': data})


# Select query

# db.connection.()

# doc = """
#          Supervised learning is the machine learning task of learning a function that
#          maps an input to an output based on example input-output pairs. It infers a
#          function from labeled training data consisting of a set of training examples.
#          In supervised learning, each example is a pair consisting of an input object
#          (typically a vector) and a desired output value (also called the supervisory signal).
#          A supervised learning algorithm analyzes the training data and produces an inferred function,
#          which can be used for mapping new examples. An optimal scenario will allow for the
#          algorithm to correctly determine the class labels for unseen instances. This requires
#          the learning algorithm to generalize from the training data to unseen situations in a
#          'reasonable' way (see inductive bias).
#       """

# kw_model = KeyBERT()
# keywords = kw_model.extract_keywords(doc)
# res = []
# for keys in keywords:
#     val = {}
#     val["label"] = keys[0]
#     val["value"] = keys[1]
#     res.append(val)

# print(res)
