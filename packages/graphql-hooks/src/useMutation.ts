import type { TypedDocumentNode } from './types/typedDocumentNode'

import useClientRequest from './useClientRequest'
import {
  UseClientRequestOptions,
  FetchData,
  UseClientRequestResult,
  ResetFunction
} from './types/common-types'

const useMutation = <
  ResponseData = any,
  Variables = object,
  TGraphQLError = object
>(
  query: string | TypedDocumentNode<ResponseData, Variables>,
  options: Omit<
    UseClientRequestOptions<ResponseData, Variables>,
    'isMutation'
  > = {}
): [
  FetchData<ResponseData, Variables, TGraphQLError>,
  UseClientRequestResult<ResponseData, TGraphQLError>,
  ResetFunction
] =>
  useClientRequest(query, {
    isMutation: true,
    ...options
  }) as any

export default useMutation
