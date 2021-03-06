from flask import Flask,jsonify,request
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
@app.route('/')
def hello_world():
    return 'Hello world'

@app.route('/api',methods=['GET'])
def api_serve():
    return 'api serve'
@app.route('/reverser',methods = ['POST'])
def reverser():
    num = request.get_json().get("num")
    num = int(num[len(num)::-1])
    return jsonify({"num":num})


@app.route('/summation',methods = ['POST'])
def summation():
    num = request.get_json().get("num")
    sum = 0
    for i in num:
        sum += int(i)

    return jsonify({"sum":sum})

if __name__ == "__main__":
     app.run(host='0.0.0.0', port=5000)
