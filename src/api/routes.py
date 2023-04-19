"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Empresa
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/user', methods=['GET', 'POST'])
def user():
    if request.method == "GET":
        users = User.query.all()
        results = [user.serialize() for user in users]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         user = User(            
                     email=request_body['email'],
                     
                     
                    )
         db.session.add(user)
         db.session.commit()
         return jsonify(request_body), 200
        
 
    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400


@api.route('/empresa', methods=['GET', 'POST'])
def empresa():
    if request.method == "GET":
        empresas = Empresa.query.all()
        results = [empresa.serialize() for empresa in empresas]
        response_body = {"message": "ok",
                        "results": results,
                        "Total_records": len(results)}
        return response_body, 200
    
    elif request.method == "POST":
         
         request_body = request.get_json()
         empresa = Empresa(            
                     
                     razon_social=request_body['razon_social'],
                     rut=request_body['rut'],
                     nombre_fantasia=request_body['nombre_fantasia'],
                     giro=request_body['giro'],
                     estado=request_body['estado'],
                     direccion_facturacion=request_body['direccion_facturacion'],
                     region=request_body['region'],
                     comuna=request_body['comuna'],
                     nombre_contacto_facturacion=request_body['nombre_contacto_facturacion'],
                     telefono_contacto_facturacion=request_body['telefono_contacto_facturacion'],
                     email_contacto_facturacion=request_body['email_contacto_facturacion'],
                     cargo_contacto_facturacion=request_body['cargo_contacto_facturacion'],
                     nombre_contacto_cobranza=request_body['nombre_contacto_cobranza'],
                     telefono_contacto_cobranza=request_body['telefono_contacto_cobranza'],
                     email_contacto_cobranza=request_body['email_contacto_cobranza'],
                     cargo_contacto_cobranza=request_body['cargo_contacto_cobranza'] 
                     
                     
                    )
         db.session.add(empresa)
         db.session.commit()
         return jsonify(request_body), 200
        
 
    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400