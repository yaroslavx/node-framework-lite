const Application = require('./fwork/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./fwork/parseJson');
const urlParser = require('./fwork/parseUrl');
const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(jsonParser);
app.use(urlParser('http://localhost:5000'));
app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
