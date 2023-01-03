export const callIsProviderInit = async (
    registryInstance,
    providerAddress,
    gas
) => {

    const isProviderInitTsx = await registryInstance.isProviderInitiated(
        providerAddress,
    );
    return isProviderInitTsx;
}