import {Inject, Injectable, Optional} from '@angular/core';
import {
  LF_JSON_SERIALIZER_OPTIONS,
  LfJsonSerializer,
  LfJsonSerializerOptions,
  LfSerializer,
  LfStorage,
} from '@lightweightform/core';
import {Schema} from '@lightweightform/storage';
import {
  LF_XML_SERIALIZER_OPTIONS,
  LfXmlSerializer,
  LfXmlSerializerOptions,
} from '@lightweightform/xml-serializer';

/**
 * Custom serialiser which allows usage of both the JSON serialiser and the XML
 * serialiser by first specifying which serialiser to use. Further fixes
 * references to the household in the relationships table.
 */
@Injectable()
export class SelfCheckInSerializer extends LfSerializer {
  private jsonSerializer: LfJsonSerializer;
  private xmlSerializer: LfXmlSerializer;
  private serializer: LfSerializer;

  constructor(
    lfStorage: LfStorage,
    @Optional()
    @Inject(LF_JSON_SERIALIZER_OPTIONS)
    jsonOptions: LfJsonSerializerOptions | null,
    @Optional()
    @Inject(LF_XML_SERIALIZER_OPTIONS)
    xmlOptions: LfXmlSerializerOptions | null,
  ) {
    super();
    this.jsonSerializer = new LfJsonSerializer(jsonOptions);
    this.xmlSerializer = new LfXmlSerializer(xmlOptions, lfStorage);
    this.serializer = this.jsonSerializer;
  }

  // Obtain from the serializer currently in use
  public get charset(): string {
    return this.serializer.charset;
  }
  public get mimeType(): string {
    return this.serializer.mimeType;
  }
  public get accept(): string {
    return this.serializer.accept;
  }
  public get extension(): string {
    return this.serializer.extension;
  }
  public get autoBOM(): boolean {
    return this.serializer.autoBOM;
  }

  /**
   * Specify which format should be handled: JSON or XML.
   * @param format Format to be handled by serialiser.
   */
  public useFormat(format: 'json' | 'xml'): void {
    this.serializer =
      format === 'json' ? this.jsonSerializer : this.xmlSerializer;
  }

  /**
   * @override
   */
  public serialize(js: any, schema: Schema, path: string): string {
    return this.serializer.serialize(js, schema, path);
  }

  /**
   * @override
   */
  public deserialize(text: string, schema: Schema, path: string): any {
    return this.serializer.deserialize(text, schema, path);
  }
}
