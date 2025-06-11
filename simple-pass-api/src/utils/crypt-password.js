import bcrypt from 'bcryptjs';

const SALT = Number(process.env.SALT);

/**
 * Hash password
 * @param string password
 * @returns string
 */
export const hashPassword = async (password) => {
    return await bcrypt.hash(password, SALT);
};

/**
 * Compare passwords
 * @param string password
 * @param string hash
 * @returns boolean
 */
export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
