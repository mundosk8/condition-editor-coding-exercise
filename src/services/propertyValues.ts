import { getProperties } from "@/datastore";

export const getPropertyValues = (propertyId: number | string | null) => {
    if (!propertyId) {
        return null;
    }

    const properties = getProperties();

    return properties.find((p) => Number(p.id) === Number(propertyId));
}