module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cb61f1c3dbb086caad61943b5dbd3d72'),
  },
});
