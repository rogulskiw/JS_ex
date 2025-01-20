const fs = require('fs')
const crypto = require('crypto');
const util = require('util')
const Repository = require('./repository')

const scrypt = util.promisify(crypto.scrypt); //thanks to util that function returns promise

class UsersRepository extends Repository {

    async comparePasswords(saved, supplied) {
        //saved -> password savied in out database. 'hashed.salt'
        // supplied -> password given to us by a user trying to sign in

        // const result = saved.split('.')
        // const hashed = result[0];
        // const salt = result[1];

        const [hashed, salt] = saved.split('.'); // it's shorter version of commented 3 lines above
        const hashedSuppliedBuf = await scrypt(supplied, salt, 64); //it is a buffer that's why it is later toStringed

        return hashed === hashedSuppliedBuf.toString('hex');
    }

    async create(attrs) {
        
        attrs.id = this.randomId();

        const salt = crypto.randomBytes(8).toString('hex');
        const buf = await scrypt(attrs.password, salt, 64); 

        const records = await this.getAll(); 
        const record = {
            ...attrs, 
            password:`${buf.toString('hex')}.${salt}` //it creates extra security for a user's password
        }
        records.push(record);
        
        await this.writeAll(records);

        return record;
    }
}

module.exports = new UsersRepository('users.json');
