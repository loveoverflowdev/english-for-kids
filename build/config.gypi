# Do not edit. File was generated by node-gyp's "configure" step
{
  "target_defaults": {
    "cflags": [],
    "default_configuration": "Release",
    "defines": [],
    "include_dirs": [],
    "libraries": [],
    "msbuild_toolset": "v143",
    "msvs_windows_target_platform_version": "10.0.22000.0"
  },
  "variables": {
    "asan": 0,
    "coverage": "false",
    "dcheck_always_on": 0,
    "debug_nghttp2": "false",
    "debug_node": "false",
    "enable_lto": "false",
    "enable_pgo_generate": "false",
    "enable_pgo_use": "false",
    "error_on_warn": "false",
    "force_dynamic_crt": 0,
    "host_arch": "x64",
    "icu_data_in": "..\\..\\deps\\icu-tmp\\icudt73l.dat",
    "icu_endianness": "l",
    "icu_gyp_path": "tools/icu/icu-generic.gyp",
    "icu_path": "deps/icu-small",
    "icu_small": "false",
    "icu_ver_major": "73",
    "is_debug": 0,
    "libdir": "lib",
    "llvm_version": "0.0",
    "napi_build_version": "9",
    "nasm_version": "2.16",
    "node_builtin_shareable_builtins": [
      "deps/cjs-module-lexer/lexer.js",
      "deps/cjs-module-lexer/dist/lexer.js",
      "deps/undici/undici.js"
    ],
    "node_byteorder": "little",
    "node_debug_lib": "false",
    "node_enable_d8": "false",
    "node_enable_v8_vtunejit": "false",
    "node_fipsinstall": "false",
    "node_install_corepack": "true",
    "node_install_npm": "true",
    "node_library_files": [
      "lib/_http_agent.js",
      "lib/_http_client.js",
      "lib/_http_common.js",
      "lib/_http_incoming.js",
      "lib/_http_outgoing.js",
      "lib/_http_server.js",
      "lib/_stream_duplex.js",
      "lib/_stream_passthrough.js",
      "lib/_stream_readable.js",
      "lib/_stream_transform.js",
      "lib/_stream_wrap.js",
      "lib/_stream_writable.js",
      "lib/_tls_common.js",
      "lib/_tls_wrap.js",
      "lib/assert.js",
      "lib/assert/strict.js",
      "lib/async_hooks.js",
      "lib/buffer.js",
      "lib/child_process.js",
      "lib/cluster.js",
      "lib/console.js",
      "lib/constants.js",
      "lib/crypto.js",
      "lib/dgram.js",
      "lib/diagnostics_channel.js",
      "lib/dns.js",
      "lib/dns/promises.js",
      "lib/domain.js",
      "lib/events.js",
      "lib/fs.js",
      "lib/fs/promises.js",
      "lib/http.js",
      "lib/http2.js",
      "lib/https.js",
      "lib/inspector.js",
      "lib/internal/abort_controller.js",
      "lib/internal/assert.js",
      "lib/internal/assert/assertion_error.js",
      "lib/internal/assert/calltracker.js",
      "lib/internal/async_hooks.js",
      "lib/internal/blob.js",
      "lib/internal/blocklist.js",
      "lib/internal/bootstrap/browser.js",
      "lib/internal/bootstrap/loaders.js",
      "lib/internal/bootstrap/node.js",
      "lib/internal/bootstrap/switches/does_not_own_process_state.js",
      "lib/internal/bootstrap/switches/does_own_process_state.js",
      "lib/internal/bootstrap/switches/is_main_thread.js",
      "lib/internal/bootstrap/switches/is_not_main_thread.js",
      "lib/internal/buffer.js",
      "lib/internal/child_process.js",
      "lib/internal/child_process/serialization.js",
      "lib/internal/cli_table.js",
      "lib/internal/cluster/child.js",
      "lib/internal/cluster/primary.js",
      "lib/internal/cluster/round_robin_handle.js",
      "lib/internal/cluster/shared_handle.js",
      "lib/internal/cluster/utils.js",
      "lib/internal/cluster/worker.js",
      "lib/internal/console/constructor.js",
      "lib/internal/console/global.js",
      "lib/internal/constants.js",
      "lib/internal/crypto/aes.js",
      "lib/internal/crypto/certificate.js",
      "lib/internal/crypto/cfrg.js",
      "lib/internal/crypto/cipher.js",
      "lib/internal/crypto/diffiehellman.js",
      "lib/internal/crypto/ec.js",
      "lib/internal/crypto/hash.js",
      "lib/internal/crypto/hashnames.js",
      "lib/internal/crypto/hkdf.js",
      "lib/internal/crypto/keygen.js",
      "lib/internal/crypto/keys.js",
      "lib/internal/crypto/mac.js",
      "lib/internal/crypto/pbkdf2.js",
      "lib/internal/crypto/random.js",
      "lib/internal/crypto/rsa.js",
      "lib/internal/crypto/scrypt.js",
      "lib/internal/crypto/sig.js",
      "lib/internal/crypto/util.js",
      "lib/internal/crypto/webcrypto.js",
      "lib/internal/crypto/webidl.js",
      "lib/internal/crypto/x509.js",
      "lib/internal/debugger/inspect.js",
      "lib/internal/debugger/inspect_client.js",
      "lib/internal/debugger/inspect_repl.js",
      "lib/internal/dgram.js",
      "lib/internal/dns/callback_resolver.js",
      "lib/internal/dns/promises.js",
      "lib/internal/dns/utils.js",
      "lib/internal/dtrace.js",
      "lib/internal/encoding.js",
      "lib/internal/error_serdes.js",
      "lib/internal/errors.js",
      "lib/internal/event_target.js",
      "lib/internal/file.js",
      "lib/internal/fixed_queue.js",
      "lib/internal/freelist.js",
      "lib/internal/freeze_intrinsics.js",
      "lib/internal/fs/cp/cp-sync.js",
      "lib/internal/fs/cp/cp.js",
      "lib/internal/fs/dir.js",
      "lib/internal/fs/promises.js",
      "lib/internal/fs/read_file_context.js",
      "lib/internal/fs/recursive_watch.js",
      "lib/internal/fs/rimraf.js",
      "lib/internal/fs/streams.js",
      "lib/internal/fs/sync_write_stream.js",
      "lib/internal/fs/utils.js",
      "lib/internal/fs/watchers.js",
      "lib/internal/heap_utils.js",
      "lib/internal/histogram.js",
      "lib/internal/http.js",
      "lib/internal/http2/compat.js",
      "lib/internal/http2/core.js",
      "lib/internal/http2/util.js",
      "lib/internal/idna.js",
      "lib/internal/inspector_async_hook.js",
      "lib/internal/js_stream_socket.js",
      "lib/internal/legacy/processbinding.js",
      "lib/internal/linkedlist.js",
      "lib/internal/main/check_syntax.js",
      "lib/internal/main/environment.js",
      "lib/internal/main/eval_stdin.js",
      "lib/internal/main/eval_string.js",
      "lib/internal/main/inspect.js",
      "lib/internal/main/mksnapshot.js",
      "lib/internal/main/print_help.js",
      "lib/internal/main/prof_process.js",
      "lib/internal/main/repl.js",
      "lib/internal/main/run_main_module.js",
      "lib/internal/main/single_executable_application.js",
      "lib/internal/main/test_runner.js",
      "lib/internal/main/watch_mode.js",
      "lib/internal/main/worker_thread.js",
      "lib/internal/mime.js",
      "lib/internal/modules/cjs/helpers.js",
      "lib/internal/modules/cjs/loader.js",
      "lib/internal/modules/esm/assert.js",
      "lib/internal/modules/esm/create_dynamic_module.js",
      "lib/internal/modules/esm/fetch_module.js",
      "lib/internal/modules/esm/formats.js",
      "lib/internal/modules/esm/get_format.js",
      "lib/internal/modules/esm/handle_process_exit.js",
      "lib/internal/modules/esm/initialize_import_meta.js",
      "lib/internal/modules/esm/load.js",
      "lib/internal/modules/esm/loader.js",
      "lib/internal/modules/esm/module_job.js",
      "lib/internal/modules/esm/module_map.js",
      "lib/internal/modules/esm/package_config.js",
      "lib/internal/modules/esm/resolve.js",
      "lib/internal/modules/esm/translators.js",
      "lib/internal/modules/esm/utils.js",
      "lib/internal/modules/package_json_reader.js",
      "lib/internal/modules/run_main.js",
      "lib/internal/net.js",
      "lib/internal/options.js",
      "lib/internal/per_context/domexception.js",
      "lib/internal/per_context/messageport.js",
      "lib/internal/per_context/primordials.js",
      "lib/internal/perf/event_loop_delay.js",
      "lib/internal/perf/event_loop_utilization.js",
      "lib/internal/perf/nodetiming.js",
      "lib/internal/perf/observe.js",
      "lib/internal/perf/performance.js",
      "lib/internal/perf/performance_entry.js",
      "lib/internal/perf/resource_timing.js",
      "lib/internal/perf/timerify.js",
      "lib/internal/perf/usertiming.js",
      "lib/internal/perf/utils.js",
      "lib/internal/policy/manifest.js",
      "lib/internal/policy/sri.js",
      "lib/internal/priority_queue.js",
      "lib/internal/process/esm_loader.js",
      "lib/internal/process/execution.js",
      "lib/internal/process/per_thread.js",
      "lib/internal/process/policy.js",
      "lib/internal/process/pre_execution.js",
      "lib/internal/process/promises.js",
      "lib/internal/process/report.js",
      "lib/internal/process/signal.js",
      "lib/internal/process/task_queues.js",
      "lib/internal/process/warning.js",
      "lib/internal/process/worker_thread_only.js",
      "lib/internal/promise_hooks.js",
      "lib/internal/querystring.js",
      "lib/internal/readline/callbacks.js",
      "lib/internal/readline/emitKeypressEvents.js",
      "lib/internal/readline/interface.js",
      "lib/internal/readline/promises.js",
      "lib/internal/readline/utils.js",
      "lib/internal/repl.js",
      "lib/internal/repl/await.js",
      "lib/internal/repl/history.js",
      "lib/internal/repl/utils.js",
      "lib/internal/socket_list.js",
      "lib/internal/socketaddress.js",
      "lib/internal/source_map/prepare_stack_trace.js",
      "lib/internal/source_map/source_map.js",
      "lib/internal/source_map/source_map_cache.js",
      "lib/internal/stream_base_commons.js",
      "lib/internal/streams/add-abort-signal.js",
      "lib/internal/streams/buffer_list.js",
      "lib/internal/streams/compose.js",
      "lib/internal/streams/destroy.js",
      "lib/internal/streams/duplex.js",
      "lib/internal/streams/duplexify.js",
      "lib/internal/streams/end-of-stream.js",
      "lib/internal/streams/from.js",
      "lib/internal/streams/lazy_transform.js",
      "lib/internal/streams/legacy.js",
      "lib/internal/streams/operators.js",
      "lib/internal/streams/passthrough.js",
      "lib/internal/streams/pipeline.js",
      "lib/internal/streams/readable.js",
      "lib/internal/streams/state.js",
      "lib/internal/streams/transform.js",
      "lib/internal/streams/utils.js",
      "lib/internal/streams/writable.js",
      "lib/internal/structured_clone.js",
      "lib/internal/test/binding.js",
      "lib/internal/test/transfer.js",
      "lib/internal/test_runner/coverage.js",
      "lib/internal/test_runner/harness.js",
      "lib/internal/test_runner/mock.js",
      "lib/internal/test_runner/reporter/dot.js",
      "lib/internal/test_runner/reporter/spec.js",
      "lib/internal/test_runner/reporter/tap.js",
      "lib/internal/test_runner/reporter/v8-serializer.js",
      "lib/internal/test_runner/runner.js",
      "lib/internal/test_runner/test.js",
      "lib/internal/test_runner/tests_stream.js",
      "lib/internal/test_runner/utils.js",
      "lib/internal/timers.js",
      "lib/internal/tls/secure-context.js",
      "lib/internal/tls/secure-pair.js",
      "lib/internal/trace_events_async_hooks.js",
      "lib/internal/tty.js",
      "lib/internal/url.js",
      "lib/internal/util.js",
      "lib/internal/util/colors.js",
      "lib/internal/util/comparisons.js",
      "lib/internal/util/debuglog.js",
      "lib/internal/util/inspect.js",
      "lib/internal/util/inspector.js",
      "lib/internal/util/iterable_weak_map.js",
      "lib/internal/util/parse_args/parse_args.js",
      "lib/internal/util/parse_args/utils.js",
      "lib/internal/util/types.js",
      "lib/internal/v8/startup_snapshot.js",
      "lib/internal/v8_prof_polyfill.js",
      "lib/internal/v8_prof_processor.js",
      "lib/internal/validators.js",
      "lib/internal/vm.js",
      "lib/internal/vm/module.js",
      "lib/internal/wasm_web_api.js",
      "lib/internal/watch_mode/files_watcher.js",
      "lib/internal/watchdog.js",
      "lib/internal/webidl.js",
      "lib/internal/webstreams/adapters.js",
      "lib/internal/webstreams/compression.js",
      "lib/internal/webstreams/encoding.js",
      "lib/internal/webstreams/queuingstrategies.js",
      "lib/internal/webstreams/readablestream.js",
      "lib/internal/webstreams/transfer.js",
      "lib/internal/webstreams/transformstream.js",
      "lib/internal/webstreams/util.js",
      "lib/internal/webstreams/writablestream.js",
      "lib/internal/worker.js",
      "lib/internal/worker/io.js",
      "lib/internal/worker/js_transferable.js",
      "lib/module.js",
      "lib/net.js",
      "lib/os.js",
      "lib/path.js",
      "lib/path/posix.js",
      "lib/path/win32.js",
      "lib/perf_hooks.js",
      "lib/process.js",
      "lib/punycode.js",
      "lib/querystring.js",
      "lib/readline.js",
      "lib/readline/promises.js",
      "lib/repl.js",
      "lib/stream.js",
      "lib/stream/consumers.js",
      "lib/stream/promises.js",
      "lib/stream/web.js",
      "lib/string_decoder.js",
      "lib/sys.js",
      "lib/test.js",
      "lib/test/reporters.js",
      "lib/timers.js",
      "lib/timers/promises.js",
      "lib/tls.js",
      "lib/trace_events.js",
      "lib/tty.js",
      "lib/url.js",
      "lib/util.js",
      "lib/util/types.js",
      "lib/v8.js",
      "lib/vm.js",
      "lib/wasi.js",
      "lib/worker_threads.js",
      "lib/zlib.js"
    ],
    "node_module_version": 108,
    "node_no_browser_globals": "false",
    "node_prefix": "\\usr\\local",
    "node_release_urlbase": "https://nodejs.org/download/release/",
    "node_shared": "false",
    "node_shared_brotli": "false",
    "node_shared_cares": "false",
    "node_shared_http_parser": "false",
    "node_shared_libuv": "false",
    "node_shared_nghttp2": "false",
    "node_shared_nghttp3": "false",
    "node_shared_ngtcp2": "false",
    "node_shared_openssl": "false",
    "node_shared_zlib": "false",
    "node_tag": "",
    "node_target_type": "executable",
    "node_use_bundled_v8": "true",
    "node_use_dtrace": "false",
    "node_use_etw": "true",
    "node_use_node_code_cache": "true",
    "node_use_node_snapshot": "true",
    "node_use_openssl": "true",
    "node_use_v8_platform": "true",
    "node_with_ltcg": "true",
    "node_without_node_options": "false",
    "openssl_is_fips": "false",
    "openssl_quic": "true",
    "ossfuzz": "false",
    "shlib_suffix": "so.108",
    "single_executable_application": "true",
    "target_arch": "x64",
    "v8_enable_31bit_smis_on_64bit_arch": 0,
    "v8_enable_gdbjit": 0,
    "v8_enable_hugepage": 0,
    "v8_enable_i18n_support": 1,
    "v8_enable_inspector": 1,
    "v8_enable_javascript_promise_hooks": 1,
    "v8_enable_lite_mode": 0,
    "v8_enable_object_print": 1,
    "v8_enable_pointer_compression": 0,
    "v8_enable_shared_ro_heap": 1,
    "v8_enable_short_builtin_calls": 1,
    "v8_enable_webassembly": 1,
    "v8_no_strict_aliasing": 1,
    "v8_optimized_debug": 1,
    "v8_promise_internal_field_count": 1,
    "v8_random_seed": 0,
    "v8_trace_maps": 0,
    "v8_use_siphash": 1,
    "want_separate_host_toolset": 0,
    "nodedir": "C:\\Users\\LAPTOP TCC\\AppData\\Local\\node-gyp\\Cache\\18.17.1",
    "standalone_static_library": 1,
    "msbuild_path": "C:\\Program Files\\Microsoft Visual Studio\\2022\\Community\\MSBuild\\Current\\Bin\\MSBuild.exe"
  }
}
