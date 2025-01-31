export type TUser = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    role: 'user' | 'admin';
    address: string;
    profileImg?: string;
    verified?: boolean;
    payment?: boolean;
};