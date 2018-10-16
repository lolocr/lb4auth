import {Entity, model, property} from '@loopback/repository'

@model({
	name: "articles_temporals_computer"
})
export class ArticlesTemporalsComputer extends Entity {

	@property({
		type: String,
		required: true,
		length: 12,
		precision: null,
		scale: null,
		id: true,
		mssql: {
			columnName: "CODIGO",
			dataType: "varchar",
			dataLength: 12,
			dataPrecision: null,
			dataScale: null,
			nullable: "NO",
		}
	})
	codigo: String;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "DESCRIP",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	descrip: String;

	@property({
		type: String,
		required: false,
		length: 13,
		precision: null,
		scale: null,
		mssql: {
			columnName: "C_BARRAS",
			dataType: "varchar",
			dataLength: 13,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	cBarras: String;

	@property({
		type: String,
		required: false,
		length: 4,
		precision: null,
		scale: null,
		mssql: {
			columnName: "FAMILIA",
			dataType: "varchar",
			dataLength: 4,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	familia: String;

	@property({
		type: String,
		required: false,
		length: 6,
		precision: null,
		scale: null,
		mssql: {
			columnName: "PROVEEDOR",
			dataType: "varchar",
			dataLength: 6,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	proveedor: String;

	@property({
		type: String,
		required: false,
		length: 2,
		precision: null,
		scale: null,
		mssql: {
			columnName: "UNIDAD",
			dataType: "varchar",
			dataLength: 2,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	unidad: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "U_SUM",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	uSum: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "UXCAJA",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	uxcaja: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PVP1",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pvp1: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PVP2",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pvp2: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PVP3",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pvp3: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PVP4",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pvp4: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 5,
		scale: 0,
		mssql: {
			columnName: "CLAVE_IVA",
			dataType: "smallint",
			dataLength: null,
			dataPrecision: 5,
			dataScale: 0,
			nullable: "YES",
		}
	})
	claveIva: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "DTO",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	dto: Number;

	@property({
		type: String,
		required: false,
		length: 10,
		precision: null,
		scale: null,
		mssql: {
			columnName: "SITUACION",
			dataType: "varchar",
			dataLength: 10,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	situacion: String;

	@property({
		type: String,
		required: false,
		length: 300,
		precision: null,
		scale: null,
		mssql: {
			columnName: "OBSERVA",
			dataType: "varchar",
			dataLength: 300,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	observa: String;

	@property({
		type: String,
		required: false,
		length: 1,
		precision: null,
		scale: null,
		mssql: {
			columnName: "PSION",
			dataType: "varchar",
			dataLength: 1,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	psion: String;

	@property({
		type: String,
		required: false,
		length: 1,
		precision: null,
		scale: null,
		mssql: {
			columnName: "DEVUEL",
			dataType: "varchar",
			dataLength: 1,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	devuel: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "STOCK_MIN",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	stockMin: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "STOCK",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	stock: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "REGULA",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	regula: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "P_COSTE",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pCoste: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "P_MEDIO",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pMedio: Number;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "FE_ULT_EN",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	feUltEn: Date;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "FE_ULT_SA",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	feUltSa: Date;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PTS_COMPRA",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsCompra: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PTS_VENTA",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsVenta: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PTS_DTOS",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	ptsDtos: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "BENEFICIO",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	beneficio: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN1",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en1: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN2",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en2: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN3",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en3: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN4",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en4: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN5",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en5: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN6",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en6: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN7",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en7: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN8",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en8: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN9",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en9: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN10",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en10: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN11",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en11: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "EN12",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	en12: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA1",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa1: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA2",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa2: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA3",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa3: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA4",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa4: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA5",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa5: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA6",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa6: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA7",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa7: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA8",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa8: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA9",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa9: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA10",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa10: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA11",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa11: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "SA12",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	sa12: Number;

	@property({
		type: String,
		required: false,
		length: 1,
		precision: null,
		scale: null,
		mssql: {
			columnName: "TIPO_DTO",
			dataType: "varchar",
			dataLength: 1,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	tipoDto: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 5,
		scale: 0,
		mssql: {
			columnName: "GRAMS_P",
			dataType: "smallint",
			dataLength: null,
			dataPrecision: 5,
			dataScale: 0,
			nullable: "YES",
		}
	})
	gramsP: Number;

	@property({
		type: String,
		required: false,
		length: 4,
		precision: null,
		scale: null,
		mssql: {
			columnName: "CODPUBLI",
			dataType: "varchar",
			dataLength: 4,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	codpubli: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PCOMPRA",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pcompra: Number;

	@property({
		type: String,
		required: false,
		length: 4,
		precision: null,
		scale: null,
		mssql: {
			columnName: "RELACION",
			dataType: "varchar",
			dataLength: 4,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	relacion: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "MARGEN",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	margen: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PVR",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pvr: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PVRT",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pvrt: Number;

	@property({
		type: String,
		required: false,
		length: 80,
		precision: null,
		scale: null,
		mssql: {
			columnName: "IMAGEN",
			dataType: "varchar",
			dataLength: 80,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	imagen: String;

	@property({
		type: String,
		required: false,
		length: 1,
		precision: null,
		scale: null,
		mssql: {
			columnName: "DISPO",
			dataType: "varchar",
			dataLength: 1,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	dispo: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "BENEF",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	benef: Number;

	@property({
		type: String,
		required: false,
		length: 5,
		precision: null,
		scale: null,
		mssql: {
			columnName: "UBISALI",
			dataType: "varchar",
			dataLength: 5,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ubisali: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "UXPALET",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	uxpalet: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "ORDENP",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	ordenp: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "PESO",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	peso: Number;

	@property({
		type: String,
		required: false,
		length: 1,
		precision: null,
		scale: null,
		mssql: {
			columnName: "MASTER",
			dataType: "varchar",
			dataLength: 1,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	master: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "SERVKG",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	servkg: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PVPMINIM",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pvpminim: Number;

	@property({
		type: String,
		required: false,
		length: 10,
		precision: null,
		scale: null,
		mssql: {
			columnName: "SUBFAMILIA",
			dataType: "varchar",
			dataLength: 10,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	subfamilia: String;

	@property({
		type: String,
		required: false,
		length: 10,
		precision: null,
		scale: null,
		mssql: {
			columnName: "FAMIPREU",
			dataType: "varchar",
			dataLength: 10,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	famipreu: String;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "VOLUMETRIA",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	volumetria: String;

	@property({
		type: String,
		required: false,
		length: 50,
		precision: null,
		scale: null,
		mssql: {
			columnName: "CODPROVE",
			dataType: "varchar",
			dataLength: 50,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	codprove: String;

	@property({
		type: String,
		required: false,
		length: 1,
		precision: null,
		scale: null,
		mssql: {
			columnName: "MSATONO",
			dataType: "varchar",
			dataLength: 1,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	msatono: String;

	@property({
		type: Date,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ULTINVEN",
			dataType: "datetime",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	ultinven: Date;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "XSALIR",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	xsalir: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "STOCKPRUD",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	stockprud: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "STOCKMAX",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	stockmax: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "CXPALET",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	cxpalet: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "ENVLLENOS",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	envllenos: Number;

	@property({
		type: String,
		required: false,
		length: 32,
		precision: null,
		scale: null,
		mssql: {
			columnName: "IMAGEID",
			dataType: "varchar",
			dataLength: 32,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	imageid: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "ALTO",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	alto: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "ANCHO",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	ancho: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "GRUESO",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	grueso: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "PVPREFERENCIA",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	pvpreferencia: Number;

	@property({
		type: String,
		required: false,
		length: 1,
		precision: null,
		scale: null,
		mssql: {
			columnName: "TIPOMARGEN",
			dataType: "varchar",
			dataLength: 1,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	tipomargen: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "XENTRAR",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	xentrar: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "totalenvas",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	totalenvas: Number;

	@property({
		type: Boolean,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ELIMINADO",
			dataType: "bit",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	eliminado: Boolean;

	@property({
		type: Boolean,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "REFRIGERADO",
			dataType: "bit",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	refrigerado: Boolean;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "CALORIAS",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	calorias: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 53,
		scale: null,
		mssql: {
			columnName: "Consumo",
			dataType: "float",
			dataLength: null,
			dataPrecision: 53,
			dataScale: null,
			nullable: "YES",
		}
	})
	consumo: Number;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "IDCATEGORIA",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	idcategoria: Number;

	@property({
		type: Boolean,
		required: false,
		length: null,
		precision: null,
		scale: null,
		mssql: {
			columnName: "ESTRATEGICO",
			dataType: "bit",
			dataLength: null,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	estrategico: Boolean;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "VENTASDIA",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	ventasdia: Number;

	@property({
		type: String,
		required: false,
		length: 200,
		precision: null,
		scale: null,
		mssql: {
			columnName: "FORMULA",
			dataType: "varchar",
			dataLength: 200,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	formula: String;

	@property({
		type: String,
		required: false,
		length: 100,
		precision: null,
		scale: null,
		mssql: {
			columnName: "OBSERVALOTE",
			dataType: "varchar",
			dataLength: 100,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	observalote: String;

	@property({
		type: String,
		required: false,
		length: 1,
		precision: null,
		scale: null,
		mssql: {
			columnName: "FORMATOLOTE",
			dataType: "varchar",
			dataLength: 1,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	formatolote: String;

	@property({
		type: String,
		required: false,
		length: 12,
		precision: null,
		scale: null,
		mssql: {
			columnName: "CODIGOCOMUN",
			dataType: "varchar",
			dataLength: 12,
			dataPrecision: null,
			dataScale: null,
			nullable: "YES",
		}
	})
	codigocomun: String;

	@property({
		type: Number,
		required: false,
		length: null,
		precision: 10,
		scale: 0,
		mssql: {
			columnName: "update",
			dataType: "int",
			dataLength: null,
			dataPrecision: 10,
			dataScale: 0,
			nullable: "YES",
		}
	})
	update: Number;

	constructor(data?: Partial<ArticlesTemporalsComputer>) {
		super(data);
	}
}