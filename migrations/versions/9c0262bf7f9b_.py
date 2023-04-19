"""empty message

Revision ID: 9c0262bf7f9b
Revises: 8acbcf052eed
Create Date: 2023-04-18 23:32:29.304879

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9c0262bf7f9b'
down_revision = '8acbcf052eed'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('perfil_usuario', sa.Boolean(), nullable=False))
        batch_op.add_column(sa.Column('perfil_admin', sa.Boolean(), nullable=False))
        batch_op.add_column(sa.Column('estado_usuario_master', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('id_usuario_master_creador', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('fecha_y_hora_creacion', sa.String(length=120), nullable=False))
        batch_op.add_column(sa.Column('id_usuario_master_modificador', sa.Integer(), nullable=True))
        batch_op.add_column(sa.Column('fecha_y_hora_modificacion', sa.String(length=120), nullable=False))
        batch_op.drop_column('peril_usuario')
        batch_op.drop_column('peril_admin')
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('peril_admin', sa.BOOLEAN(), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('peril_usuario', sa.BOOLEAN(), autoincrement=False, nullable=False))
        batch_op.drop_column('fecha_y_hora_modificacion')
        batch_op.drop_column('id_usuario_master_modificador')
        batch_op.drop_column('fecha_y_hora_creacion')
        batch_op.drop_column('id_usuario_master_creador')
        batch_op.drop_column('estado_usuario_master')
        batch_op.drop_column('perfil_admin')
        batch_op.drop_column('perfil_usuario')

    # ### end Alembic commands ###
