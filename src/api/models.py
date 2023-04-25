from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


    
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_master = db.Column(db.String(120), unique=True, nullable=False)
    clave = db.Column(db.String(80), unique=False, nullable=False)
    nombre_usuario_master = db.Column(db.String(120), unique=False, nullable=False)
    telefono = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    cargo = db.Column(db.String(120), unique=False)
    observaciones = db.Column(db.String(120), unique=False)
    perfil_usuario = db.Column(db.Boolean(), unique=False, nullable=False)
    perfil_admin = db.Column(db.Boolean(), unique=False, nullable=False)
    estado_usuario_master = db.Column(db.String(120), unique=False, nullable=False)
    id_usuario_master_creador = db.Column(db.Integer, unique=False)
    fecha_y_hora_creacion = db.Column(db.String(120), unique=False)
    id_usuario_master_modificador = db.Column(db.Integer, unique=False)
    fecha_y_hora_modificacion = db.Column(db.String(120), unique=False)
    
    

    def __repr__(self):
        return f'<User {self.nombre_usuario_master}>'

    def serialize(self):
        return {
            "id": self.id,
            "usuario_master": self.usuario_master,
            "nombre_usuario_master": self.nombre_usuario_master,
            "telefono": self.telefono,
            "email": self.email,
            "cargo": self.cargo,
            "observaciones": self.observaciones,
            "perfil_usuario": self.perfil_usuario,
            "perfil_admin": self.perfil_admin,
            "estado_usuario_master": self.estado_usuario_master,
            "id_usuario_master_creador": self.id_usuario_master_creador,
            "fecha_y_hora_creacion": self.fecha_y_hora_creacion,
            "id_usuario_master_modificador": self.id_usuario_master_creador,
            "fecha_y_hora_modificacion": self.fecha_y_hora_modificacion,
            # do not serialize the password, its a security breach
        }

class Empresa(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    razon_social = db.Column(db.String(120), unique=True)
    rut = db.Column(db.String(80), unique=True)
    rut_verificador = db.Column(db.String(80), unique=False)
    nombre_fantasia = db.Column(db.String(120), unique=False)
    giro = db.Column(db.String(120), unique=False)
    estado = db.Column(db.String(120), unique=False)
    direccion_facturacion = db.Column(db.String(120), unique=False)
    region = db.Column(db.String(120), unique=False)
    comuna = db.Column(db.String(120), unique=False)
    nombre_contacto_facturacion = db.Column(db.String(120), unique=False, nullable=False)
    telefono_contacto_facturacion = db.Column(db.String(80), nullable=False)
    email_contacto_facturacion = db.Column(db.String(120), unique=True, nullable=False)
    cargo_contacto_facturacion = db.Column(db.String(120), unique=False)
    nombre_contacto_cobranza = db.Column(db.String(120), unique=False, nullable=False)
    telefono_contacto_cobranza = db.Column(db.String(80), nullable=False)
    email_contacto_cobranza = db.Column(db.String(120), unique=True, nullable=False)
    cargo_contacto_cobranza = db.Column(db.String(120), unique=False)
    id_usuario_master_creador = db.Column(db.Integer, unique=False)
    fecha_y_hora_creacion = db.Column(db.String(120), unique=False)
    id_usuario_master_modificador = db.Column(db.Integer, unique=False)
    fecha_y_hora_modificacion = db.Column(db.String(120), unique=False)

  
    
    

    def __repr__(self):
        return f'<User {self.razon_social}>'

    def serialize(self):
        return {
            "id": self.id,
            "razon_social": self.razon_social,
            "rut": self.rut,
            "rut_verificador": self.rut_verificador,
            "nombre_fantasia": self.nombre_fantasia,
            "giro": self.giro,
            "estado": self.estado,
            "direccion_facturacion": self.direccion_facturacion,
            "region": self.region,
            "comuna": self.comuna,
            "nombre_contacto_facturacion": self.nombre_contacto_facturacion,
            "telefono_contacto_facturacion": self.telefono_contacto_facturacion,
            "email_contacto_facturacion": self.email_contacto_facturacion,
            "cargo_contacto_facturacion": self.cargo_contacto_facturacion,
            "nombre_contacto_cobranza": self.nombre_contacto_cobranza,
            "telefono_contacto_cobranza": self.telefono_contacto_cobranza,
            "email_contacto_cobranza": self.email_contacto_cobranza,
            "cargo_contacto_cobranza": self.cargo_contacto_cobranza,
            "id_usuario_master_creador": self.id_usuario_master_creador,
            "fecha_y_hora_creacion": self.fecha_y_hora_creacion,
            "id_usuario_master_modificador": self.id_usuario_master_creador,
            "fecha_y_hora_modificacion": self.fecha_y_hora_modificacion,
            
            # do not serialize the password, its a security breach
        }


