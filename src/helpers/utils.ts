export class Utils {
    static queryDefaultLimit = 20;

    static parseDateToMssql(date: string) {
        let trans_date = new Date(date);
        let month = trans_date.getMonth() + 1 > 9 ? trans_date.getMonth() : '0' + (trans_date.getMonth() + 1).toString();
        let day = trans_date.getDate() > 9 ? trans_date.getDate().toString() : '0' + trans_date.getDate();
        return trans_date.getFullYear().toString() + '/' + month + '/' + day;
    }
}