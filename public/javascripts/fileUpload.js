FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginImageResize);
FilePond.registerPlugin(FilePondPluginFileEncode);
const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(inputElement);
FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100
})
FilePond.parse(document.body);