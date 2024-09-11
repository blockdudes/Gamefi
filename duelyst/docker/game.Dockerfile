# Build on top of the prebuilt Node.js image for OpenDuelyst.
ARG NODEJS_IMAGE_VERSION
FROM duelyst-nodejs:${NODEJS_IMAGE_VERSION}

# Start the service.
EXPOSE 6901
ENTRYPOINT ["yarn", "game"]
