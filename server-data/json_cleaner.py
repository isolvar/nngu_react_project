'''
Remove symbols '\n', '\t', ' '(whitespace) from file.
'''
import sys

def main(file_in, file_out):
    with open(file_in, mode='r') as f:
        data = f.read()

        new_data:str = ''

        #  remove '\n'
        for letter in data:
            if letter == '\n' or letter == '\t':
                letter = ''
            new_data += letter

        #  remove ' ' (whitespace)
        new_data1:str = ''
        isOpenString:bool = False
        for letter in new_data:
            if letter == '"':
                isOpenString = not(isOpenString)
                
            if (letter == ' ' and not(isOpenString)):
                letter = ''
            new_data1 += letter

        with open(file_out, mode='x') as fl:
            fl.write(new_data1)


if __name__ == "__main__":
    file_in = sys.argv[1]
    file_out = sys.argv[2]
    main(file_in, file_out)