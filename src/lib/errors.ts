/**
 * Converts an unknown error into a readable string message.
 * Handles:
 * 1. Native Error instances (e.message)
 * 2. Plain objects with a string `message` property (e.g. Supabase errors: includes code, details, and hint when present)
 * 3. Anything else: safe JSON.stringify with fallback to String(error)
 */
export function getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }

    if (error !== null && typeof error === 'object') {
        const record = error as Record<string, unknown>;

        if (typeof record.message === 'string') {
            const parts: string[] = [record.message];
            const extraParts: string[] = [];

            if (record.code !== undefined && record.code !== null) {
                extraParts.push(`code: ${String(record.code)}`);
            }
            if (typeof record.details === 'string' && record.details.trim().length > 0) {
                extraParts.push(`details: ${record.details}`);
            }
            if (typeof record.hint === 'string' && record.hint.trim().length > 0) {
                extraParts.push(`hint: ${record.hint}`);
            }

            if (extraParts.length > 0) {
                parts.push(`(${extraParts.join(', ')})`);
            }

            return parts.join(' ');
        }

        try {
            return JSON.stringify(error);
        } catch {
            return String(error);
        }
    }

    return String(error);
}
