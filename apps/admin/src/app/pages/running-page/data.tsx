export const dataMockup = {
  id: '24T74FLrMy',
  title: 'test',
  payloads: {
    size: 'lg',
  },
  content: {
    body: [
      {
        uid: '24T74FLr00',
        component: 'FLEX',
        payloads: {
          direction: 'column',
          align: 'center',
          gap: 'md',
          mt: '100px',
        },
        childs: [
          {
            uid: '24T74FLr01',
            component: 'TITLE',
            payloads: {
              order: 2,
            },
            content: 'Welcome back to Myapp!',
          },
          {
            uid: '24T74FLr02',
            component: 'INPUT',
            payloads: {
              placeholder: 'Your email',
              miw: '500px',
            },
            content: 'Email address',
          },
          {
            uid: '24T74FLr03',
            component: 'INPUT',
            payloads: {
              withAsterisk: true,
              placeholder: 'Your password',
              miw: '500px',
              type: 'password',
            },
            content: 'Password',
          },
          {
            uid: '24T74FLr04',
            component: 'FLEX',
            payloads: {
              gap: 'xs',
            },
            childs: [
              {
                uid: '24T74FLr05',
                component: 'CHECKBOX',
                payloads: {},
              },
              {
                uid: '24T74FLr06',
                component: 'TEXT',
                payloads: {},
                content: 'Keep me logged in',
              },
            ],
          },
          {
            uid: '24T74FLr07',
            component: 'BUTTON',
            payloads: {
              miw: '500px',
              onClick: () => console.log('CLicked'),
            },
            content: 'Login',
          },
          {
            uid: '24T74FLr08',
            component: 'TEXT',
            payloads: {},
            content: "Don't have an account? Register",
          },
        ],
      },
    ],
  },
}
