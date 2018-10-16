import {Entity, model, property} from '@loopback/repository'

@model({
	name: "Ultima_Venta"
})
export class UltimaVenta extends Entity {

	@property({
		type: String,
		required: true,
		length: 20,
		precision: null,
		scale: null,
		id: true,
		mssql: {
			columnName: "CodigoArticulo",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	codigoarticulo: String;

	@property({
		type: String,
		required: true,
		length: 40,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Descripcion",
			dataType: "varchar",
			dataLength: 40,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	descripcion: String;

	@property({
		type: String,
		required: false,
		length: 20,
		precision: null,
		scale: null,
		mssql: {
			columnName: "Cliente",
			dataType: "varchar",
			dataLength: 20,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	cliente: String;

	@property({
		type: String,
		required: false,
		length: 30,
		precision: null,
		scale: null,
		mssql: {
			columnName: "estadoactual",
			dataType: "varchar",
			dataLength: 30,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	estadoactual: String;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "horault",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	horault: Date;

	constructor(data?: Partial<UltimaVenta>) {
		super(data);
	}
}