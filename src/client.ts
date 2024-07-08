import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/helloworld';
import { HelloRequest, HelloReply } from './proto/helloworld';

const PROTO_PATH = __dirname + '/../protos/helloworld.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
});

const protoDescriptor = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;

const GreeterClient = grpc.makeGenericClientConstructor(
    protoDescriptor.helloworld.Greeter.service,
    'Greeter'
) as unknown as typeof grpc.Client;

const client = new GreeterClient('localhost:50051', grpc.credentials.createInsecure());

// Ensure the client has the method `SayHello`
(client as any).SayHello({ name: 'Worldddnnbkjbh' }, (err: grpc.ServiceError | null, response: HelloReply) => {
    if (err) console.error(err);
    else console.log('Greeting:', response.message);
});
