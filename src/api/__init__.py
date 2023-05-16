import csv

with open('/workspace/bots/src/api/MONITBOTS.csv', 'r', newline='') as csvfile:
    
    csvreader = csv.reader(csvfile, delimiter=';')
    lista = []
    for fila in csvreader:
        lista.append(fila)

    csvfile.close()

print(lista[1][0])
