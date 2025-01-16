const fs = require('fs')

class UsersRepository {
    constructor(filename){
        if(!filename){
            throw new Error('Creating repository requires a filename')
        }

        this.filename = filename;
        try{
            fs.accessSync(this.filename);
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
        }
        
    
    }
}

const repor = new UsersRepository('users.json'); 