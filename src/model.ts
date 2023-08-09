export const delivery = {
  children: [
    {
      type: 'radio',
      name: 'delivery',
      values: ['NP', 'AdressNP', 'self delivery'],
      children: [
        {
          type: 'select',
          name: 'City',
          values: fetch('cities'),
          dependOn: 'NP',
          children: [
            {
              type: 'select',
              name: 'department',
              values: fetch('departments'),
            },
          ],
        },
        {
          type: 'select',
          name: 'City',
          values: fetch('cities'),
          dependOn: 'AdressNP',
          children: [
            {
              type: 'input',
              name: 'Client Adresses',
            },
            {
              type: 'radio',
              name: 'eployer',
              values: ['self', 'anorher'],
              children: [
                {
                  type: 'input',
                  name: 'FirstName',
                  dependOn: 'anorher',
                },
                {
                  type: 'input',
                  name: 'LastName',
                  dependOn: 'anorher',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
