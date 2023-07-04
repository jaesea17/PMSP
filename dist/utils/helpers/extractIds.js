"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIds = void 0;
function getIds(ids) {
    let commodityId = "", observationId = "";
    ids.split(',').forEach((val, index) => {
        if (val.includes('commodityId')) {
            commodityId = val.split(':')[1].trim();
        }
        else if (val.includes("observationId")) {
            observationId = val.split(':')[1].trim();
        }
    });
    return { commodityId, observationId };
}
exports.getIds = getIds;
