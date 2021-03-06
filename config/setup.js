// eslint-disable-next-line @typescript-eslint/no-var-requires
const enzyme = require('enzyme')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17')

enzyme.configure({ adapter: new Adapter() })
process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['images.example.com'],
    path: '/_next/image',
    loader: 'default',
  },
}
