import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Login"
})
export class Login extends Entity {

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		id: true,
		mssql: {
			columnName: "ID",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	id: Number;

	@property({
		type: String,
		required: false,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "UserID",
			dataType: "nvarchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	userid: String;

	@property({
		type: String,
		required: false,
		length: 255,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Contrasenya",
			dataType: "varchar",
			dataLength: 255,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	contrasenya: String;

	@property({
		type: String,
		required: false,
		length: 255,
		precision: null,
		scale: null,
		mssql: {
			columnName: "NomClient",
			dataType: "varchar",
			dataLength: 255,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	nomclient: String;

	@property({
		type: String,
		required: false,
		length: 255,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Rol",
			dataType: "varchar",
			dataLength: 255,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	rol: String;

	@property({
		type: String,
		required: false,
		length: 255,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Permisos",
			dataType: "varchar",
			dataLength: 255,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	permisos: String;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ciudad",
			dataType: "nvarchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ciudad: String;

	@property({
		type: String,
		required: false,
		length: 255,
		precision: null,
		scale: null,
		mssql: {
			columnName: "operari",
			dataType: "varchar",
			dataLength: 255,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	operari: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Grupo_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	grupoId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Empresa_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	empresaId: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "Operador_id",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	operadorId: Number;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "card_num1",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	cardNum1: String;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "card_num2",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	cardNum2: String;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "card_num3",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	cardNum3: String;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "card_num4",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	cardNum4: String;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "card_num5",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	cardNum5: String;

	@property({
		type: String,
		required: false,
		length: 11,
		precision: null,
		scale: null,
		mssql: {
			columnName: "dni",
			dataType: "varchar",
			dataLength: 11,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	dni: String;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "phone",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	phone: String;

	@property({
		type: String,
		required: false,
		length: 100,
		precision: null,
		scale: null,
		mssql: {
			columnName: "email",
			dataType: "varchar",
			dataLength: 100,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	email: String;

	@property({
		type: Number,
		required: true,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "operador_usuari",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "NO",
		}
	})
	operadorUsuari: Number;

	@property({
		type: String,
		required: true,
		length: 100,
		precision: null,
		scale: null,
		mssql: {
			columnName: "token",
			dataType: "varchar",
			dataLength: 100,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	token: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "user_role",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	userRole: Number;

	constructor(data?: Partial<Login>) {
		super(data);
	}
}