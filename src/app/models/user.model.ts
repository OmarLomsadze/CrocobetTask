import { Address } from "./address.model"
import { Company } from "./company.model"

// მოდელები რომ API ქოლის შედეგი დავმაპოთ
export class User {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public address: Address,
        public phone: string,
        public website: string,
        public company: Company
    ) {}
}