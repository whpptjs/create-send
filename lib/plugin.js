import SiteSetting from './templates/SiteSetting';

export default async function (context) {
  const CreateSend = {
    name: 'CreateSend',
    siteSettings: {
      name: 'create-send',
      label: 'Create Send',
      component: SiteSetting,
    },
  };

  await context.$whppt.addPlugin(CreateSend);
}
