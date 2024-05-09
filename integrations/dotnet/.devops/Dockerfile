FROM mcr.microsoft.com/dotnet/sdk:8.0


# Set environment variables
ENV DOTNET_CLI_TELEMETRY_OPTOUT=1
ENV PATH="/usr/share/dotnet:$PATH"

# Set non-root user
ENV USER="user"
RUN useradd -M -u 1000 $USER
USER $USER 
ENV HOME="/home/$USER"
WORKDIR $HOME

RUN dotnet tool install --global Corvus.Json.JsonSchema.TypeGeneratorTool

# Set environment variables
ENV PATH="/home/$USER/.dotnet/tools:${PATH}"

# Edit .dotnet directory permissions for the nom-root user
RUN chown -R $USER:$USER $HOME/.dotnet

# ENTRYPOINT [ "generatejsonschematypes" ]