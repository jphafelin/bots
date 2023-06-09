"""empty message

Revision ID: ee98a8f44674
Revises: be90163a701f
Create Date: 2023-04-19 01:21:17.697358

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ee98a8f44674'
down_revision = 'be90163a701f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('empresa', schema=None) as batch_op:
        batch_op.drop_constraint('empresa_telefono_contacto_cobranza_key', type_='unique')
        batch_op.drop_constraint('empresa_telefono_contacto_facturacion_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('empresa', schema=None) as batch_op:
        batch_op.create_unique_constraint('empresa_telefono_contacto_facturacion_key', ['telefono_contacto_facturacion'])
        batch_op.create_unique_constraint('empresa_telefono_contacto_cobranza_key', ['telefono_contacto_cobranza'])

    # ### end Alembic commands ###
