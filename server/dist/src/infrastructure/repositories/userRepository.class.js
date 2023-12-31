"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const repository_abstract_1 = require("./repository.abstract");
const inversify_1 = require("inversify");
const ioc_types_1 = require("../../domain/models/ioc.types");
require("reflect-metadata");
let UserRepository = class UserRepository extends repository_abstract_1.RepositoryBase {
    constructor(userDbContext) {
        super(userDbContext);
        this.findUserWithToken = (token) => __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne({ 'activeSession.token': token });
        });
        this.createUser = (avatar, firstName, lastName, phone, email, password, extraNumberCount, roleId) => __awaiter(this, void 0, void 0, function* () {
            return yield this.create({
                avatar: avatar,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                password: password,
                extraNumberCount: extraNumberCount,
                verified: false,
                roleId: roleId
            });
        });
        this.getAllDataWithPopulate = (rolerefName, rolModelName, id, email) => __awaiter(this, void 0, void 0, function* () {
            if (id && !email) {
                return (yield this.dbContext.model.findById(id).populate({
                    path: rolerefName, model: rolModelName, options: {
                        strictPopulate: false
                    }
                }).exec());
            }
            if (email && !id) {
                return yield this.dbContext.model.findOne({ email: email }).populate({
                    path: rolerefName, model: rolModelName, options: {
                        strictPopulate: false
                    }
                }).exec();
            }
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(ioc_types_1.Types.IDbContext)),
    __param(0, (0, inversify_1.named)("userDbContext")),
    __metadata("design:paramtypes", [Object])
], UserRepository);
//# sourceMappingURL=userRepository.class.js.map