require('./plugin-name.scss');

const PluginName = {
  greet: (name) => {
    $('.greeting').text('Hello, ' + name);
  }
};

export default PluginName;