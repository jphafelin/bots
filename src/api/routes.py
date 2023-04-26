"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Empresa
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def create_token():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    if username != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    username = get_jwt_identity()
    console.log(username)
    return jsonify(access_token=access_token)



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
                     rut_verificador=request_body['rut_verificador'],
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
                     cargo_contacto_cobranza=request_body['cargo_contacto_cobranza'],
                     id_usuario_master_creador=request_body['id_usuario_master_creador'],
                     fecha_y_hora_creacion=request_body['fecha_y_hora_creacion'],
                     id_usuario_master_modificador=request_body['id_usuario_master_modificador'],
                     fecha_y_hora_modificacion=request_body['fecha_y_hora_modificacion'],

                     
                     
                    )
         db.session.add(empresa)
         db.session.commit()
         return jsonify(request_body), 200
        
 
    else:
        response_body = {"message": "Error. Method not allowed."}
        return response_body, 400

@api.route('/empresa/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = Empresa.query.filter_by(id=user_id).first()
    if user:
        result = user.serialize()
        response_body = {'message': 'OK',
                     'result': result}
        return jsonify(response_body), 200  
    else:
        return jsonify({'message': 'User not found or not active'}), 404


@api.route('/empresa/<int:client_id>', methods=['PUT'])
def update_empresa(client_id):
    client = Empresa.query.get(client_id)
    if client is None:
        return 'Not found', 404
    
    client.estado = request.json.get('estado', client.estado)
    client.fecha_y_hora_modificacion = request.json.get('fecha_y_hora_modificacion', client.fecha_y_hora_modificacion)
    
    db.session.commit()

    response_body = {'estado': client.estado,
                     }

    return jsonify(response_body), 200