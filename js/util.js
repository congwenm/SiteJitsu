var util = {
    MOBILE : function(){ return navigator.userAgent.match(/mobile/i)},
    clickEvent: this.MOBILE ? "touchend" : "click",
    addressState : [
        {name: "AA"}, {name: "AE"}, {name: "AK"}, {name: "AL"}, {name: "AP"}, {name: "AR"}, {name: "AS"}, {name: "AZ"}, {name: "CA"}, {name: "CO"},
        {name: "CT"}, {name: "DC"}, {name: "DE"}, {name: "FL"}, {name: "GA"}, {name: "GU"}, {name: "HI"}, {name: "IA"}, {name: "ID"}, {name: "IL"},
        {name: "IN"}, {name: "KS"}, {name: "KY"}, {name: "LA"}, {name: "MA"}, {name: "MD"}, {name: "ME"}, {name: "MI"}, {name: "MN"}, {name: "MO"},
        {name: "MS"}, {name: "MT"}, {name: "NC"}, {name: "ND"}, {name: "NE"}, {name: "NH"}, {name: "NJ"}, {name: "NM"}, {name: "NV"}, {name: "NY"},
        {name: "OH"}, {name: "OK"}, {name: "OR"}, {name: "PA"}, {name: "PR"}, {name: "RI"}, {name: "SC"}, {name: "SD"}, {name: "TN"}, {name: "TX"},
        {name: "UT"}, {name: "VA"}, {name: "VI"}, {name: "VT"}, {name: "WA"}, {name: "WI"}, {name: "WV"}, {name: "WY"}
    ]
};
var config = {
    /*project count, all urls goes into the array*/
    project: [
    ]
}