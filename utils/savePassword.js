const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const savePassword = (password, title = 'no-name') => {
	fs.open(
		path.join(__dirname, '../', 'passwords.txt'),
		'a',
		'666',
		(e, id) => {
			fs.write(
				id,
				`${title}: ${password} (Created On: ${new Date().toDateString()})` +
					os.EOL,
				null,
				'utf-8',
				() => {
					fs.close(id, () => {
						console.log(
							chalk.green('Password saved to passwords.txt')
						);
					});
				}
			);
		}
	);
};

module.exports = savePassword;
