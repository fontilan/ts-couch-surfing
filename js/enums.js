"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyUser = exports.Permissiones = void 0;
var Permissiones;
(function (Permissiones) {
    Permissiones[Permissiones["ADMIN"] = 0] = "ADMIN";
    Permissiones[Permissiones["READ_ONLY"] = 1] = "READ_ONLY";
})(Permissiones = exports.Permissiones || (exports.Permissiones = {}));
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser = exports.LoyaltyUser || (exports.LoyaltyUser = {}));
