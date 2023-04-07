from flask import Flask, render_template
from collections import defaultdict
import re
import io
import urllib.request
from zipfile import ZipFile

app = Flask(__name__)

@app.route('/')
def load_from_url(url):
    data = urllib.request.urlopen(url).read()
    zipdata = ZipFile(io.BytesIO(data))
    filename = zipdata.namelist()[0]
    text = zipdata.read(filename).decode("shift-jis")
    text = re.sub(r'［.*?］', '', text)
    text = re.sub(r'《.*?》', '', text)
    URL = "https://www.aozora.gr.jp/cards/000119/files/624_ruby_5668.zip"
    text = load_from_url(URL)
    view = text.split()[0] 
    return view
