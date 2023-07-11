module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dttq6kz2t'),
          api_key: env('657836123136251'),
          api_secret: env('ptb_zwFHebeTv203vzE_tHxAKUo'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });