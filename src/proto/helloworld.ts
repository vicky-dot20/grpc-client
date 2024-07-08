import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

export interface ProtoGrpcType {
    helloworld: {
        Greeter: {
            service: grpc.ServiceDefinition<any>;
        };
        HelloRequest: MessageTypeDefinition;
        HelloReply: MessageTypeDefinition;
    };
}

export interface HelloRequest {
    name: string;
}

export interface HelloReply {
    message: string;
}
