from js import DOMParser, document

class script:
    def main():
        original = document.getElementById("original").value
        parody = document.getElementById("parody").value

        final = translate(original, parody)

    def translate(original, parody):
        print("Hello world")