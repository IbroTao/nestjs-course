/* eslint-disable */
import {NestFactory} from "@nestjs/core"
import {AppModule} from "./app.module"

async function myApp() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
myApp()