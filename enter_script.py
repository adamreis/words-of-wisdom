#!/usr/local/bin/python3

__author__ = "Adam Reis"

import json
from dateutil import parser

def add_wisdom(new_wisdom):
    with open("wisdom.json", "r") as wisdom_file:
        wisdoms = json.load(wisdom_file)
    wisdoms.append(new_wisdom)
    with open("wisdom.json", "w") as wisdom_file:
        wisdom_file.write(json.dumps(wisdoms))

if __name__ == "__main__":

    new_wisdoms = []

    while True:
        wisdom = []
        line = input("Wisdom: ")

        while len(line):
            wisdom.append(line)
            line = input("        ")
        if not len(wisdom):
            break
        
        date_str = input("date: ")
        if len(date_str):
            date = str(parser.parse(date_str).date())
        add_wisdom((wisdom, date))

